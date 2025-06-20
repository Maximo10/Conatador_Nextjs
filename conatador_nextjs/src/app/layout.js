import "./globals.css";
export const metadata={
    title: "Contado",
    description:"Contador_Nextjs",
}
export default function RootLayout({children}){
    return(
        <html>
            <body className="bg-black-100 min-h-screen flex items-center justify-center px-4">
                {children}
            </body>                
        </html>
    );
}