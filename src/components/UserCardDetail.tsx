"use client";

import { IconMailForward, IconMapPins } from "@tabler/icons-react";

import { UserCardDetailsProps } from "@/libs/types";

export default function UserCardDetail({ email, address }:UserCardDetailsProps) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}
