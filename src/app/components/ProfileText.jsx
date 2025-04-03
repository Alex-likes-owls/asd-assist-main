"use client";

import { useSelector } from "react-redux";

export default function ProfileText() {
  const toggle = useSelector((state) => state.counter.toggle);
  return (
    <div>
      <p className="text-4xl text-sky-950 font-bold">
        {toggle
          ? "Та одоо тестүүдийг өгч чадна! Ｏ(≧∇≦)Ｏ"
          : "You can now take tests! Ｏ(≧∇≦)Ｏ"}
      </p>
    </div>
  );
}
