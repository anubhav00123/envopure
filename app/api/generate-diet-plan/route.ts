import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Types
type Input = {
  age: number;
  weight: number;
  goal: string;
  diet: string;
};

type DietPlan = {
  id: string;
  goal: string;
  dietType: string;
  caloriesPerDay: number;
  proteinPerDay: string;
  recommendedFor: {
    weightRangeKg: [number, number];
  };
  weeklyPlan: Record<string, any>;
};

// Load mock data (server-side only)
const dataPath = path.join(process.cwd(), "data", "diet_mock_data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

function generateDietPlan(input: Input) {
  const match = data.dietPlans.find((plan: DietPlan) =>
    plan.goal === input.goal &&
    plan.dietType === input.diet &&
    input.weight >= plan.recommendedFor.weightRangeKg[0] &&
    input.weight <= plan.recommendedFor.weightRangeKg[1]
  );

  if (!match) {
    return { error: "No matching diet plan found" };
  }

  return {
    planId: match.id,
    goal: match.goal,
    dietType: match.dietType,
    caloriesPerDay: match.caloriesPerDay,
    proteinPerDay: match.proteinPerDay,
    weeklyPlan: match.weeklyPlan
  };
}

// POST /api/generate-diet-plan
export async function POST(req: Request) {
  const body: Input = await req.json();
  const result = generateDietPlan(body);
  return NextResponse.json(result);
}