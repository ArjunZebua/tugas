import { useState, useEffect } from "react";

const Home = () => {
  const backgrounds = [
    "https://asset.kompas.com/crops/9wMolnOIJRNtklMlYYZKKe_Y9e0=/144x0:1764x1080/1200x800/data/photo/2020/09/08/5f57298f1215a.jpg",
    "https://awsimages.detik.net.id/community/media/visual/2024/05/29/demon-slayer-kimetsu-no-yaiba-to-the-hashira-training-season-4_169.jpeg?w=1200", 
    "https://i.scdn.co/image/ab67616d0000b273d955549733d7bda40185449c", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6pFxdauPCQqrq_D0VIocx8giZTYCAXcyuQ&s",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3500); // Ganti setiap 3,5 detik
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white-400/70 to-orange-600/70 z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col justify-center items-start px-6 py-16 space-y-6">
        <h1 className="text-6xl font-bold">
          <span className="italic">Yakuza Fiancé</span>
        </h1>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm bg-orange-600 px-3 py-1 rounded-lg font-semibold">
            18+
          </span>
          <span className="text-sm bg-white text-orange-500 px-3 py-1 rounded-lg font-semibold">
            Adaptasi komik
          </span>
          <span className="text-sm bg-white text-orange-500 px-3 py-1 rounded-lg font-semibold">
            Romantis
          </span>
          <span className="text-sm bg-white text-orange-500 px-3 py-1 rounded-lg font-semibold">
            Modern
          </span>
          <span className="text-sm bg-white text-orange-500 px-3 py-1 rounded-lg font-semibold">
            Tamat
          </span>
        </div>

        <p className="text-lg max-w-xl">
          Somei Yoshino harus tinggal bersama Miyama Kirishima, tunangannya yang
          dipilih oleh kakeknya, Somei Renji, pemimpin...
        </p>

        <div className="flex gap-4">
        </div>
      </div>
    </div>
  );
};

export default Home;
