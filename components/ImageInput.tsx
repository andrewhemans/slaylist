"use client";

import {
  BackgroundImage,
  Box,
  Container,
  Text,
  TextInput,
  Button,
  ActionIcon,
} from "@mantine/core";
import { useEffect, useState } from "react";
import DownloadAsImage from "./DownloadAsImage";
import data from "./data.js";
import FeatherIcon from "feather-icons-react";

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
  "early-morning": "/images/sunrise.png",
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
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay | null>(null);
  const [value, setValue] = useState(""); // Initialize with an empty string

  useEffect(() => {
    // Determine the time of day and generate the initial sentence on client-side
    const currentTimeOfDay = determineTimeOfDay();
    setTimeOfDay(currentTimeOfDay);
    setValue(generateSentence());

    const interval = setInterval(() => {
      setTimeOfDay(determineTimeOfDay());
    }, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Update the sentence when timeOfDay changes
    if (timeOfDay) {
      setValue(generateSentence());
    }
  }, [timeOfDay]);

  const imageUrl = timeOfDay
    ? getImageForTimeOfDay(timeOfDay)
    : "/images/default.png"; // Provide a default image

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
              px={"lg"}
              pb={"xs"}
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
              <Text c="rgba(255, 255, 255, 0.5)" size="sm">
                slaylist.dev
              </Text>
            </BackgroundImage>
          </DownloadAsImage>
        </Box>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <TextInput
            size="md"
            value={value}
            onChange={handleChange}
            style={{ flexGrow: "1" }}
          />
          <ActionIcon
            color="gray"
            radius="lg"
            size="lg"
            variant="light"
            onClick={regenerateSentence}
          >
            <FeatherIcon icon="refresh-cw" size="18" />
          </ActionIcon>
        </Container>
      </Container>
    </div>
  );
}
