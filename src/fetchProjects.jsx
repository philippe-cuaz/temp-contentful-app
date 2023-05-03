import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "2ilgvaw5c0xc",
  environment: "master",
  //accessToken: "h0wraXRlpDDujh_DlIW1R2jDz4rPdUMKe0D4LPGqjP4",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      console.log(response);

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
