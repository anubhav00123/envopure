"use client";

import { useState } from "react";

type DietPlanResult = {
  planId?: string;
  goal?: string;
  dietType?: string;
  caloriesPerDay?: number;
  proteinPerDay?: string;
  weeklyPlan?: Record<string, any>;
  error?: string;
};

export default function GymDietPlan() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DietPlanResult | null>(null);

  async function generatePlan() {
    setLoading(true);

    try {
      const res = await fetch("/api/generate-diet-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: 25,
          weight: 75,
          goal: "Muscle Gain",
          diet: "Non-Vegetarian"
        })
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Failed to generate diet plan" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Gym Diet Plan Generator</h2>

      <button onClick={generatePlan} disabled={loading}>
        {loading ? "Generating..." : "Generate Diet Plan"}
      </button>

      {result?.error && (
        <p style={{ color: "red", marginTop: 12 }}>
          {result.error}
        </p>
      )}

      {result && !result.error && (
        <pre style={{ marginTop: 16, background: "#f5f5f5", padding: 12 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </section>
  );
}