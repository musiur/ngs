import { Card, Image, useTheme } from "@nextui-org/react";
import Link from "next/link";

const Home = () => {
  const { theme } = useTheme();
  const heroItems = [
    { text: "Teachers", color: "#F31260", link: "/teachers" },
    { text: "Students", color: "#7828C8", link: "/students" },
    { text: "Admin", color: "#17C964", link: "/admin" },
    { text: "Notice", color: "#F5A524", link: "/notice" },
    { text: "Result", color: "#0072F5", link: "/result" },
    { text: "Gallary", color: "#F31260", link: "/gallary" },
  ];
  return (
    <div>
      <div className="w-full min-h-[50vh] max-h-[70vh] homehero"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sectionG containerG">
        {heroItems.map((item, i) => {
          return (
            <Link key={i} href={item.link}>
              <Card
                isPressable
                isHoverable
                variant="bordered"
                className={`w-full min-h-[100px] flex items-center justify-center font-bold text-lg lg:text-2xl text-white`}
                style={{ background: item.color }}
              >
                {item.text}
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
