import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredMods = [
    {
      id: 1,
      name: "CyberCraft 2077",
      game: "Minecraft",
      downloads: "2.5M",
      rating: 4.8,
      image: "/img/30b5e710-59c4-4a65-992a-bf7c4486df91.jpg",
      description: "Превратите Minecraft в киберпанк мир будущего",
      isNew: true,
    },
    {
      id: 2,
      name: "Neon Streets",
      game: "GTA 5",
      downloads: "1.8M",
      rating: 4.9,
      image: "/img/f89b3d61-0da1-4fe9-ba40-8cf183a961ba.jpg",
      description: "Неоновые улицы и футуристические автомобили",
      isNew: false,
    },
    {
      id: 3,
      name: "Future Farm",
      game: "FS 22",
      downloads: "892K",
      rating: 4.7,
      image: "/img/bbb42d90-999b-4256-92e9-931104a21d7a.jpg",
      description: "Высокотехнологичная техника будущего",
      isNew: true,
    },
  ];

  const gameCategories = [
    { name: "Minecraft", count: 1247, icon: "Gamepad2" },
    { name: "GTA 5", count: 892, icon: "Car" },
    { name: "FS 15-25", count: 634, icon: "Tractor" },
    { name: "Cyberpunk 2077", count: 423, icon: "Zap" },
    { name: "Skyrim", count: 2156, icon: "Sword" },
    { name: "Fallout 4", count: 987, icon: "Radiation" },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark cyber-grid">
      {/* Header */}
      <header className="border-b border-cyber-light/20 bg-cyber-darker/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1
                className="text-2xl font-bold text-neon-pink neon-glow"
                style={{ fontFamily: "Orbitron" }}
              >
                GAMING MODS
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:text-neon-pink transition-colors"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-neon-green transition-colors"
              >
                Все моды
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-neon-cyan transition-colors"
              >
                Новинки
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-neon-pink transition-colors"
              >
                Инструкции
              </Button>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск модов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-cyber-light/50 border-neon-pink/30 text-white placeholder:text-gray-400 focus:border-neon-pink focus:ring-neon-pink"
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white neon-border">
                <Icon name="Download" size={16} className="mr-2" />
                Загрузить мод
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1
            className="text-6xl font-black mb-6 text-white animate-fade-in"
            style={{ fontFamily: "Orbitron" }}
          >
            <span className="text-neon-pink neon-glow animate-neon-pulse">
              CYBER
            </span>
            <span className="text-neon-green neon-glow"> MODS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Революционные моды для ваших любимых игр. Погрузитесь в мир
            киберпанка и футуристических технологий.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-3 neon-border"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Исследовать моды
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green/10 px-8 py-3"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Гайды по установке
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/50"></div>
      </section>

      {/* Featured Mods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "Orbitron" }}
            >
              <span className="text-neon-green neon-glow">ПОПУЛЯРНЫЕ</span> МОДЫ
            </h2>
            <Button
              variant="outline"
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
            >
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMods.map((mod, index) => (
              <Card
                key={mod.id}
                className="bg-cyber-light/30 border-cyber-light/50 hover:border-neon-pink/50 transition-all duration-300 group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={mod.image}
                    alt={mod.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {mod.isNew && (
                    <Badge className="absolute top-3 right-3 bg-neon-green text-black animate-neon-pulse">
                      NEW
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white group-hover:text-neon-pink transition-colors">
                      {mod.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="border-neon-cyan text-neon-cyan"
                    >
                      {mod.game}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {mod.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Download"
                          size={16}
                          className="text-neon-green"
                        />
                        <span className="text-sm text-gray-300">
                          {mod.downloads}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                        <span className="text-sm text-gray-300">
                          {mod.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white neon-border">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-white mb-12"
            style={{ fontFamily: "Orbitron" }}
          >
            <span className="text-neon-cyan neon-glow">КАТЕГОРИИ</span> ИГР
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gameCategories.map((category, index) => (
              <Card
                key={category.name}
                className="bg-cyber-light/20 border-cyber-light/30 hover:border-neon-green/50 transition-all duration-300 cursor-pointer group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={category.icon as any}
                    size={32}
                    className="mx-auto mb-3 text-neon-green group-hover:animate-neon-pulse"
                  />
                  <h3 className="font-semibold text-white mb-1 group-hover:text-neon-green transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.count} модов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "Orbitron" }}
            >
              <span className="text-neon-pink neon-glow">ЛЕГКАЯ</span> УСТАНОВКА
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Пошаговые инструкции для установки любого мода за считанные минуты
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-pink/40 transition-colors">
                  <Icon name="Download" size={24} className="text-neon-pink" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Скачайте мод
                </h3>
                <p className="text-gray-400">
                  Выберите подходящий мод и скачайте его одним кликом
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/40 transition-colors">
                  <Icon
                    name="FolderOpen"
                    size={24}
                    className="text-neon-green"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Распакуйте файлы
                </h3>
                <p className="text-gray-400">
                  Следуйте простым инструкциям по распаковке
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-cyan/40 transition-colors">
                  <Icon name="Play" size={24} className="text-neon-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Играйте!
                </h3>
                <p className="text-gray-400">
                  Запустите игру и наслаждайтесь новыми возможностями
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="mt-8 bg-neon-green hover:bg-neon-green/80 text-black px-8 py-3 neon-border"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Подробные инструкции
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-light/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3
                className="text-xl font-bold text-neon-pink mb-4"
                style={{ fontFamily: "Orbitron" }}
              >
                GAMING MODS
              </h3>
              <p className="text-gray-400">
                Лучшие моды для ваших любимых игр в одном месте
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Категории
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-green transition-colors"
                  >
                    Minecraft
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-green transition-colors"
                  >
                    GTA 5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-green transition-colors"
                  >
                    Farming Simulator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-green transition-colors"
                  >
                    Skyrim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Помощь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Инструкции
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-pink transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Следите за обновлениями
              </h4>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                >
                  <Icon name="Github" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green/10"
                >
                  <Icon name="Rss" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-cyber-light/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gaming Mods. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
