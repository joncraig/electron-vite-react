import { useState, useRef } from "react";
import "./Channels.css";
import Channel from "./Channel";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
function Channels() {
  const ref = useRef(null);
  const init = {
    label: "ch",
    fixture: "100",
    top: 100,
    bottom: 0,
  };
  const initRows = Array(4)
    .fill({})
    .map((i) => {
      return { ...init };
    });
  const [channels, setChannels] = useState(initRows);

  const immutableSwap = (firstIndex: number, secondIndex: number) => {
    const result = [...channels];
    [result[secondIndex], result[firstIndex]] = [
      result[firstIndex],
      result[secondIndex],
    ];
    return result;
  };
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setChannels(arrayMove(channels, oldIndex, newIndex));
    //   const swapped = immutableSwap(oldIndex, newIndex);
    // setChannels(swapped);
  };
  return (
    <div className="Channels">
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="draggedChannel"
        lockAxis="x"
      >
        {channels.map((channel, channelIndex) => (
          <SortableItem key={channelIndex}>
            <Channel
              channel={channel}
              channelIndex={channelIndex}
              channels={channels}
              setChannels={setChannels}
              ref={ref}
            />
          </SortableItem>
        ))}
      </SortableList>
    </div>
  );
}

export default Channels;
