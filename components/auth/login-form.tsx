"use client";
import * as z from "zod";

import {useForm} from "react-hook-form";
import { CardWrapper } from "./card-wrapper";

import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <CardWrapper
        headerLabel="welcome back"
        backButtonLabel="Don't have an account"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => {})}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name= "email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                        {...field}
                                        placeholder="ewa.lawrence@example.com"
                                        type="email"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            ) }
                        />
                        <FormField 
                            control={form.control}
                            name= "password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                        {...field}
                                        placeholder="******"
                                        type="password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            ) }
                        />        
                    </div>
                </form>    
            </Form>
        </CardWrapper>
    );
};
