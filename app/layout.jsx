import { Footer, Header } from "./components";
import {
  AuthContextProvider,
  CartoonContextProvider,
  PopularContextProvider,
  RecomContextProvider,
  SeriesContextProvider,
} from "./context";

import "./globals.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/swiper-element.min.css";

export const metadata = {
  title: "Netflix Узбекистан — Смотрите сериалы и фильмы онлайн",
  description:
    "Смотрите фильмы и сериалы на Netflix онлайн или транслируйте их на Smart TV, игровую консоль, ПК, Mac, мобильный телефон, планшет и другие устройства.",
};

export default function RootLayout({ children }) {
  return (
    <PopularContextProvider>
      <RecomContextProvider>
        <CartoonContextProvider>
          <AuthContextProvider>
            <SeriesContextProvider>
              <html lang="en">
                <head>
                  <meta
                    content="смотреть фильмы, фильмы онлайн, смотреть ТВ, ТВ онлайн, сериалы онлайн, смотреть сериалы, транслировать фильмы, транслировать сериалы, стриминг онлайн, смотреть онлайн, фильмы, смотреть фильмы Узбекистан, смотреть ТВ онлайн, без загрузки, полнометражные фильмы"
                    name="keywords"
                  />
                  <meta
                    property="og:description"
                    content="Смотрите фильмы и сериалы на Netflix онлайн или транслируйте их на Smart TV, игровую консоль, ПК, Mac, мобильный телефон, планшет и другие устройства."
                  />
                </head>
                <body>
                  <Header />
                  <main className="bg-[#141414] pb-10">{children}</main>
                  <Footer />
                </body>
              </html>
            </SeriesContextProvider>
          </AuthContextProvider>
        </CartoonContextProvider>
      </RecomContextProvider>
    </PopularContextProvider>
  );
}
