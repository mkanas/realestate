"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "./ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

const SearchForm = () => {
  const form = useForm();
  return (
    <div className="grid w-full  items-end bg-black gap-4 sm:grid-col-2 lg:grid-cols-4 p-6">
      <Form {...form}>
        <FormField
          control={form.control}
          name="Addres"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white ">Property</FormLabel>
                <Select>
                  <SelectTrigger className="rounded-[8px]">
                    <SelectValue className="text-white " placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Address</FormLabel>
                <Input
                  placeholder="Search by Addres"
                  className="bg-white rounded-[8px]"
                />
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white bg-white=">
                Buy/Sell Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full bg-white pl-3 text-left rounded-[8px] font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="mr-2 rounded-[8px] bg-slate-800">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
