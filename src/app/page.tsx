import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-blue-600">

    <Card>
      <Text className="text-6xl  font-bold text-center mb-10">Weather App</Text>
      <Subtitle className="text-2xl text-center">A simple weather app built with Next.js and Tailwind CSS</Subtitle>
      <Divider className="my-10"/>
      <Card className="bg-gradient-to-br from-yellow-200 to-blue-400"></Card>
    </Card>
    </div>
  );
}
