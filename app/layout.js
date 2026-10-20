import "./globals.css";

export const metadata = {
title: "Ideas Overload | Digital Solutions",
description:
"Ideas Overload provides website development, Android applications, business management systems, and innovative ICT solutions.",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
