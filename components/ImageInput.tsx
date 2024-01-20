"use client";

import {
  BackgroundImage,
  Box,
  Container,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import DownloadAsImage from "./DownloadAsImage";

export default function ImageInput() {
  const [value, setValue] = useState("Type whatever you wantcore afternoon");
  return (
    <div>
      <Container>
        <Box mb={"lg"}>
          <DownloadAsImage>
            <BackgroundImage
              src="/images/sunrise.png"
              radius="sm"
              p={"lg"}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                aspectRatio: "4/3",
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <Text size={"18px"} pb={"sm"} c="white" fw={500}>
                slaylist
              </Text>
              <Text
                size={"42px"}
                c="white"
                fw={700}
                style={{ wordBreak: "break-word", textTransform: "lowercase" }}
              >
                {value}
              </Text>
            </BackgroundImage>
          </DownloadAsImage>
        </Box>
        <TextInput
          size="md"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Container>
    </div>
  );
}
