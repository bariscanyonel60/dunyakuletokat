import {
  Antenna,
  ArrowLeftRight,
  ClipboardList,
  Link2,
  RadioTower,
  Shield,
  TowerControl,
  Wrench,
  Zap,
} from "lucide-react";
import type { Service } from "@/content/site";

const map: Record<Service["icon"], typeof RadioTower> = {
  tower: RadioTower,
  antenna: Antenna,
  mount: TowerControl,
  wrench: Wrench,
  link: Link2,
  power: Zap,
  survey: ClipboardList,
  swap: ArrowLeftRight,
};

export function ServiceIcon({
  name,
  className = "h-5 w-5",
}: {
  name: Service["icon"] | "shield";
  className?: string;
}) {
  const Icon = name === "shield" ? Shield : map[name];
  return <Icon className={className} aria-hidden />;
}
