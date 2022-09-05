import React from 'react';
import AuctionsSections from './components/elements/Auctions/AuctionsSections';
import Collections from './components/elements/Collections/Collections';
import Creators from './components/elements/Creators/Creators';
import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import Subscribe from './components/elements/Subscribe/Subscribe';
import Work from './components/elements/Work/Work';
import ClientsLogo from './components/elements/СlientsLogo/ClientsLogo';
function App() {
	return (
		<>
			<Header />
			<ClientsLogo />
			<AuctionsSections />
			<Work />
			<Collections />
			<Creators />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
