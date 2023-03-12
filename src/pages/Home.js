import TrendMovie from "../components/TrendMovie";
import TrendTv from "../components/TrendTv";
import ViewSelection from "../components/ViewSelection";

export default function Home() {
  return (
    <ViewSelection>
      <TrendMovie />
      <TrendTv />
    </ViewSelection>
  );
}
