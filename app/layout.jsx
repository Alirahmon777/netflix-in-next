import { Footer, Header } from "./components";
import {
  AuthContextProvider,
  CartoonContextProvider,
  LoadingContextProvider,
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
    <AuthContextProvider>
      <LoadingContextProvider>
        <PopularContextProvider>
          <RecomContextProvider>
            <SeriesContextProvider>
              <CartoonContextProvider>
                <html lang="en">
                  <body>
                    <Header />
                    <main className="bg-[#141414] pb-10">{children}</main>
                    <Footer />
                  </body>
                </html>
              </CartoonContextProvider>
            </SeriesContextProvider>
          </RecomContextProvider>
        </PopularContextProvider>
      </LoadingContextProvider>
    </AuthContextProvider>
  );
}
