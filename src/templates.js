export default function defaultTemplate() {
  return {
    attrs: {
      width: 400,
      height: 300,
    },
    className: "Stage",
    children: [
      {
        attrs: {},
        className: "Layer",
        children: [
          {
            attrs: {
              x: 0,
              y: 0,
              width: 400,
              height: 300,
              fill: "white",
            },
            className: "Rect",
            id: 0,
          },
          // {
          //   attrs: {
          //     x: 400,
          //     y: 300,
          //     radius: 100,
          //     fill: "",
          //     stroke: "red",
          //     strokeWidth: 4,
          //   },
          //   className: "Circle",
          //   id: 6,
          // },
          // {
          //   attrs: {
          //     x: 400,
          //     y: 300,
          //     radius: 50,
          //     fill: "",
          //     stroke: "red",
          //     strokeWidth: 10,
          //   },
          //   className: "Circle",
          //   id: 5,
          // },
          // {
          //   attrs: {
          //     x: 85,
          //     y: 130,
          //     text: "€9.99",
          //     fontSize: 100,
          //     fontFamily: "Calibri",
          //     fill: "black",
          //   },
          //   className: "Text",
          //   id: 4,
          // },
          // {
          //   attrs: {
          //     x: 0,
          //     y: 10,
          //     width: 400,
          //     height: 62,
          //     fill: "red",
          //     stroke: "black",
          //     strokeWidth: 4,
          //   },
          //   className: "Rect",
          //   id: 3,
          // },
          // {
          //   attrs: {
          //     x: 150,
          //     y: 20,
          //     text: "%3%",
          //     fontSize: 46,
          //     fontFamily: "Calibri",
          //     fill: "black",
          //   },
          //   className: "Text",
          //   id: 2,
          // },
          // {
          //   attrs: {
          //     x: 100,
          //     y: 150,
          //     angle: 45,
          //     length: 200,
          //     stroke: "black",
          //     strokeWidth: 3,
          //   },
          //   className: "Line",
          //   id: 1,
          // },
          // {
          //   attrs: {
          //     image: "lion.png",
          //     x: 0,
          //     y: 0,
          //     width: 100,
          //     height: 100,
          //   },
          //   className: "Image",
          //   id: 0,
          // },
        ].reverse(),
      },
    ],
  };
}

export function rectJSON(
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  fill = "",
  stroke = "black",
  strokeWidth = "3"
) {
  return {
    attrs: {
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      fill,
      stroke,
      strokeWidth,
    },
    className: "Rect",
    id: 0,
  };
}

export function circleJSON(
  x = 0,
  y = 0,
  radius = 50,
  fill = "",
  stroke = "black",
  strokeWidth = "3"
) {
  return {
    attrs: {
      x,
      y,
      radius,
      fill,
      stroke,
      strokeWidth,
    },
    className: "Circle",
    id: 0,
  };
}

export function textJSON(
  x = 0,
  y = 0,
  text = "%Text%",
  fontSize = 32,
  fontFamily = "Calibri",
  fill = "black"
) {
  return {
    attrs: {
      x: x - 50,
      y: y - 16,
      text,
      fontSize,
      fontFamily,
      fill,
    },
    className: "Text",
    id: 0,
  };
}

export function imageJSON(
  x = 0,
  y = 0,
  image = "lion.png",
  width =150,
  height = 150
) {
  return {
    attrs: {
      image,
      x,
      y,
      width,
      height,
    },
    className: "Image",
    id: 0,
  };
}

export function lineJSON(
  x = 0,
  y = 0,
  angle = 0,
  length = 200,
  stroke = "black",
  strokeWidth = 3
) {
  return {
    attrs: {
      x: x - 100,
      y,
      angle,
      length,
      stroke,
      strokeWidth,
    },
    className: "Line",
    id: 0,
  };
}



