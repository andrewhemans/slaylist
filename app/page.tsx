"use client";

import { Container, Text } from "@mantine/core";
import { useState } from "react";
import ImageInput from "../components/ImageInput";
import { useMediaQuery } from "@mantine/hooks";

export default function HomePage() {
  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <div>
      <Container
        size={"sm"}
        h={"100vh"}
        p={0}
        style={
          isMobile
            ? {}
            : {
                borderLeft: "1px solid",
                borderRight: "1px solid",
                borderColor: "#2e2e2e",
              }
        }
      >
        <ImageInput />
      </Container>
    </div>
  );
}
