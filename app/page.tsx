import { Container, Text } from "@mantine/core";
import { useState } from "react";
import ImageInput from "../components/ImageInput";

export default function HomePage() {
  return (
    <div>
      <Container
        size={"sm"}
        h={"100vh"}
        style={{
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "#424242",
        }}
      >
        <Text size={"100px"} fw={700} p={"lg"} style={{ textAlign: "center" }}>
          Slaylist
        </Text>
        <ImageInput />
      </Container>
    </div>
  );
}
