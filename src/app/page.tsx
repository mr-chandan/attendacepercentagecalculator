"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AttendanceApp() {
  const [totalClasses, setTotalClasses] = useState("");
  const [classesAttended, setClassesAttended] = useState("");
  const [desiredAttendance, setDesiredAttendance] = useState("75");
  const [results, setResults] = useState({
    currentAttendance: 0,
    classesNeeded: 0,
    classesCanMiss: 0,
  });

  const reqAttendance = (
    present: number,
    total: number,
    percentage: number
  ) => {
    return Math.ceil((percentage * total - 100 * present) / (100 - percentage));
  };

  const daysToBunk = (present: number, total: number, percentage: number) => {
    return Math.floor((100 * present - percentage * total) / percentage);
  };

  const calculateAttendance = () => {
    const total = parseInt(totalClasses);
    const attended = parseInt(classesAttended);
    const desiredPercentage = parseInt(desiredAttendance);

    // Input validation
    if (attended < 0 || total <= 0 || attended > total) {
      alert("Please enter proper values!");
      return;
    }

    const currentAttendance = (attended / total) * 100;

    if (currentAttendance >= desiredPercentage) {
      const classesCanMiss = daysToBunk(attended, total, desiredPercentage);
      setResults({
        currentAttendance: parseFloat(currentAttendance.toFixed(2)),
        classesNeeded: 0,
        classesCanMiss: Math.max(0, classesCanMiss),
      });
    } else {
      const classesNeeded = reqAttendance(attended, total, desiredPercentage);
      setResults({
        currentAttendance: parseFloat(currentAttendance.toFixed(2)),
        classesNeeded: Math.max(0, classesNeeded),
        classesCanMiss: 0,
      });
    }
  };

  const resetForm = () => {
    setTotalClasses("");
    setClassesAttended("");
    setDesiredAttendance("75");
    setResults({
      currentAttendance: 0,
      classesNeeded: 0,
      classesCanMiss: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Attendance Calculator
        </h1>
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Total Classes"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            aria-label="Total Classes"
          />
          <Input
            type="number"
            placeholder="Classes Attended"
            value={classesAttended}
            onChange={(e) => setClassesAttended(e.target.value)}
            aria-label="Classes Attended"
          />
          <Select
            value={desiredAttendance}
            onValueChange={setDesiredAttendance}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select desired attendance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="75">75%</SelectItem>
              <SelectItem value="80">80%</SelectItem>
              <SelectItem value="85">85%</SelectItem>
              <SelectItem value="90">90%</SelectItem>
              <SelectItem value="95">95%</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full" onClick={calculateAttendance}>
            Calculate
          </Button>
        </div>

        {results.currentAttendance > 0 && (
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold">Current Attendance</p>
              <p className="text-3xl font-bold text-primary">
                {results.currentAttendance}%
              </p>
            </div>
            {results.classesNeeded > 0 ? (
              <p className="text-center text-sm text-red-600">
                You need to attend {results.classesNeeded} more class
                {results.classesNeeded > 1 && "es"} to achieve{" "}
                {desiredAttendance}% attendance.
              </p>
            ) : (
              <p className="text-center text-sm text-green-600">
                You can bunk {results.classesCanMiss} more class
                {results.classesCanMiss > 1 && "es"} and still maintain{" "}
                {desiredAttendance}% attendance.
              </p>
            )}
            <Progress value={results.currentAttendance} className="w-full" />
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm font-medium">Classes Needed</p>
                <p className="text-lg font-semibold text-green-600">
                  {results.classesNeeded}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Classes Can Miss</p>
                <p className="text-lg font-semibold text-red-600">
                  {results.classesCanMiss}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <Button variant="outline" onClick={resetForm}>
            Reset
          </Button>
          {/* <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
