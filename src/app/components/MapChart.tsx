"use client";

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const isMobile =
  typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

const MapChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Add intersection observer to only render when visible
  useEffect(() => {
    if (!chartRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!chartRef.current || !isVisible) return;

    setIsLoading(true);
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        projection: am5map.geoOrthographic(),
        homeGeoPoint: { latitude: -6.2088, longitude: 106.8456 }, // Jakarta
        wheelable: false, // ✅ matikan scroll zoom
        pinchZoom: false, // ✅ matikan pinch zoom (untuk trackpad/touch)
      })
    );

    // Set rotation and zoom after chart creation
    chart.set("rotationX", -150.8456);
    chart.set("rotationY", 5.2088);
    chart.seriesContainer.set("x", 150);
    // chart.set("zoomLevel", 1.5);

    const backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fillOpacity: 0,
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    // Add world map polygons
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow.default,
      })
    );

    // Set polygon fill color
    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0x89dffe), // Updated polygon fill color
      stroke: am5.color(0xffffff), // Optional: add stroke for better visual contrast
      strokeWidth: 0.5,
    });

    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.3,
    });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 7,
        // tooltipText: "Drag me!",
        cursorOverStyle: "pointer",
        tooltipY: 0,
        fill: am5.color(0x005d7a),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        draggable: false,
      });

      circle.events.on("dragged", (event: any) => {
        const dataItem = event.target.dataItem;
        const geoPoint = chart.invert({ x: circle.x(), y: circle.y() });
        dataItem.setAll({
          longitude: geoPoint.longitude,
          latitude: geoPoint.latitude,
        });
      });

      return am5.Bullet.new(root, { sprite: circle });
    });

    const addCity = (coords: { latitude: number; longitude: number }) =>
      pointSeries.pushDataItem({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

    const tokyo = addCity({ latitude: 35.6764, longitude: 139.65 }); // Japan
    const jakarta = addCity({ latitude: -6.2088, longitude: 106.8456 }); // Indonesia
    const moscow = addCity({ latitude: 55.7558, longitude: 37.6173 }); // Russia
    const newYork = addCity({ latitude: 40.7128, longitude: -74.006 }); // America

    const lineDataItem = lineSeries.pushDataItem({
      pointsToConnect: [tokyo, jakarta, moscow, newYork],
    });

    const planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    const plane = am5.Graphics.new(root, {
      svgPath:
        "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
      scale: 0.06,
      centerY: am5.p50,
      centerX: am5.p50,
      fill: am5.color(0x000000),
    });

    planeSeries.bullets.push(() => {
      const container = am5.Container.new(root, {});
      container.children.push(plane);
      return am5.Bullet.new(root, { sprite: container });
    });

    const planeDataItem = planeSeries.pushDataItem({
      lineDataItem,
      positionOnLine: 0,
      autoRotate: true,
    });

    planeDataItem.dataContext = {};

    planeDataItem.animate({
      key: "positionOnLine",
      to: 1,
      duration: 10000,
      loops: Infinity,
      easing: am5.ease.yoyo(am5.ease.linear),
    });

    planeDataItem.on("positionOnLine", (value, target, key) => {
      const dataContext = planeDataItem.dataContext as any;
      const prevPosition = dataContext.prevPosition ?? 0;

      if (typeof value === "number") {
        if (prevPosition < value) {
          plane.set("rotation", 0);
        } else if (prevPosition > value) {
          plane.set("rotation", -180);
        }
        dataContext.prevPosition = value;
      }
    });

    chart.appear(1000, 100);
    setIsLoading(false);

    // Optimize animations for mobile
    if (!isMobile) {
      let currentRotationX = chart.get("rotationX") || 0;
      let animationFrameId: number;

      const rotate = () => {
        currentRotationX += 0.025;
        chart.set("rotationX", currentRotationX);
        animationFrameId = requestAnimationFrame(rotate);
      };

      rotate();

      // Cleanup animation frame
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        root.dispose();
      };
    }

    return () => root.dispose();
  }, [isVisible]); // Only re-run when visibility changes

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{
        width: "150vh",
        height: "150vh",
        // maxWidth: "100vw",
        // maxHeight: "100vh",
        position: "relative",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Loading map...
        </div>
      )}
    </div>
  );
};

export default MapChart;
