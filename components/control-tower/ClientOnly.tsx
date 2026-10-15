"use client";

import dynamic from "next/dynamic";

// The dashboard is fully interactive and computes dates/state in the browser,
// so it is rendered on the client only (avoids hydration mismatches).
const ControlTower = dynamic(() => import("./ControlTower"), { ssr: false });

export default function ClientOnly() {
  return <ControlTower showReasoning />;
}
