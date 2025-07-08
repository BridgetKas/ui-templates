import { useState } from "react";

const panels = [
  {
    title: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "USA",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    title: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Germany",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Canada",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "France",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Destination1() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-center flex w-[90vw]">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`destination ${activeIndex === index ? "destination-active" : ""}`}
          style={{ backgroundImage: `url(${panel.image})` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3 className={`destinationHeader ${activeIndex === index ? "destinationHeaderActive" :""}`}>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}
