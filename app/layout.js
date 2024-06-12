import './globals.css'

// la constante ou la variable 'metadata' permet de setter le header de notre page html. c'est pourquoi il n'y a pas l'element <head></head> dans le return du RootLayout ci-dessous qui definit la structure globale de nos pages html

// le props {children} permet d'injecter du contenu dans le body des pages html. {children} est le contenu de la page active
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
