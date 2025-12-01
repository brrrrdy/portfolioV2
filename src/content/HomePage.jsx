export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Anchor for top navigation */}
      <div id="top" className="h-px w-full relative" />

      {/* All homepage components */}
      <TopNavBar />
      <Header />
      <AboutCard />
      <Portfolio />
      <Toolkit />
      <Contact />
      <FooterNav />
    </div>
  );
}

export default HomePage;
