import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getPhotos } from "./service/unsplashAPI";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!searchPhrase) return;

    const fetchData = async () => {
      try {
        const { data } = await getPhotos(searchPhrase);
        setImages(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchPhrase]);

  const handleFormSubmit = (value) => {
    setSearchPhrase(value);
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleFormSubmit} />
        <ImageGallery galleryList={images} />
      </Container>
    </Section>
  );
};

export default App;
