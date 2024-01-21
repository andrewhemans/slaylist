"use client";

import {
  BackgroundImage,
  Box,
  Container,
  Text,
  TextInput,
  Button,
} from "@mantine/core";
import { useEffect, useState } from "react";
import DownloadAsImage from "./DownloadAsImage";
import data from "./data.js";

type TimeOfDay =
  | "early-morning"
  | "mid-morning"
  | "afternoon"
  | "evening"
  | "night"
  | "late-night";

const determineTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 8) return "early-morning"; // 5AM - 7:59AM
  if (hour >= 8 && hour < 12) return "mid-morning"; // 8AM - 11:59AM
  if (hour >= 12 && hour < 17) return "afternoon"; // 12PM - 4:59PM
  if (hour >= 17 && hour < 20) return "evening"; // 5PM - 7:59PM
  if (hour >= 20 && hour < 23) return "night"; // 8PM - 10:59PM
  return "late-night"; // 11PM - 4:59AM
};

const imageMap: Record<TimeOfDay, string> = {
  "early-morning": "/images/late-night.png",
  "mid-morning": "/images/mid-morning.png",
  afternoon: "/images/afternoon.png",
  evening: "/images/evening.png",
  night: "/images/night.png",
  "late-night": "/images/late-night.png",
};

const getImageForTimeOfDay = (timeOfDay: TimeOfDay): string => {
  return imageMap[timeOfDay];
};

const getRandomElement = (arr: string | any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const generateSentence = () => {
  const descriptiveWord = getRandomElement(data.descriptiveWords).word;
  const feeling = getRandomElement(data.emotions).feeling;
  const slangTerm = getRandomElement(data.slangTerms).term;
  const suffix = getRandomElement(data.suffixes).suffix;
  const timeOfDay = determineTimeOfDay();

  return `${descriptiveWord} ${feeling} ${slangTerm}${suffix} ${timeOfDay}`;
};

export default function ImageInput() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(determineTimeOfDay());
  const [value, setValue] = useState(""); // Initialize with an empty string

  useEffect(() => {
    // Generate the initial sentence only on client-side
    setValue(generateSentence());

    const interval = setInterval(() => {
      setTimeOfDay(determineTimeOfDay());
    }, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Update value when timeOfDay changes
  useEffect(() => {
    setValue(generateSentence());
  }, [timeOfDay]);

  const imageUrl = getImageForTimeOfDay(timeOfDay);

  // Update the TextInput value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  // Function to regenerate the sentence
  const regenerateSentence = () => {
    setValue(generateSentence());
  };

  return (
    <div>
      <Container p={0}>
        <Box mb={"lg"}>
          <DownloadAsImage>
            <BackgroundImage
              src={imageUrl}
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
        <Container>
          <TextInput size="md" value={value} onChange={handleChange} />
          <Button color="gray" variant="light" onClick={regenerateSentence}>
            Regenerate Sentence
          </Button>
        </Container>
      </Container>
    </div>
  );
}
