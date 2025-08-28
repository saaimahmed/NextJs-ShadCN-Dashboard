"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarCheckIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const formatDate = date ? format(date, "MMMM dd, yyyy") : "pick a date";

  return (
    <>
      <div>
        <h1 className="text-lg font-medium mb-6">Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="w-full">
              <CalendarCheckIcon />
              {formatDate}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>

        {/* List */}
        <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
          {/* list item */}
          <div className="flex flex-col gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <label
                  className="text-sm text-muted-foreground"
                  htmlFor="item1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, voluptatum.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                  className="text-sm text-muted-foreground"
                  htmlFor="item1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, voluptatum.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" checked />
                <label
                  className="text-sm text-muted-foreground"
                  htmlFor="item1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, voluptatum.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                  className="text-sm text-muted-foreground"
                  htmlFor="item1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, voluptatum.
                </label>
              </div>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default TodoList;
