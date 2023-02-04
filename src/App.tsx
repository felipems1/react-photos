import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/Theme";
import Switch from "react-switch";
import api from "./services/api";
import * as C from "./styles/AppStyle";

let searchTimer: any = null;

interface Photo {
  id: string,
  urls: {
    thumb: string
  },
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchPhoto, setSearchPhoto] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const loadPhotos = async () => {
    await api.get("search/photos", {
      params: {
        client_id: "BNmHdmyYvL6eDJOMjjb19LIJJycRgsdovn0fEaEbY30",
        query: searchPhoto,
        page: 1,
        orientation: "portrait",
      },
    }).then((response)=>{
      setPhotos(response.data.results)
    }).catch((error)=>{
      console.log(error)
    })
  };

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setSearchPhoto(activeSearch);
    }, 1000);
  }, [activeSearch]);

  useEffect(() => {
    loadPhotos();
  }, [searchPhoto]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <C.Container>
        <C.Title>Imagens gratuitas de alta qualidade</C.Title>
        <Switch
          onChange={() => themeToggler()}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          onColor="#f5f5f5"
          offColor="#121212"
          offHandleColor="#00f"
          onHandleColor="#0f0"
          handleDiameter={20}
        />
        <C.Search
          type="text"
          placeholder="Pesquisar imagens"
          value={activeSearch}
          onChange={(e) => setActiveSearch(e.target.value)}
          autoFocus={true}
        />
        {photos.length === 0 ? (
          <C.SubTitle>Digite no campo acima para buscar as imagens.</C.SubTitle>
        ) : (
          <C.PhotoArea>
            {photos.map((item) => (
              <C.PhotoImage key={item.id} src={item.urls.thumb} alt="photo" />
            ))}
          </C.PhotoArea>
        )}
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
