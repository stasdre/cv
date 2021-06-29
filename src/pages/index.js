import Sidebar from '../Layouts/Sidebar';
import Header from '../Layouts/Header';
import Content from '../Layouts/Content';

export default function Home() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
}
