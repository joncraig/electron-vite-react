// import { useState } from "react";
import * as React from "react";
import { forwardRef } from "react";
import Slider from "@mui/material/Slider";
import { SortableKnob } from "react-easy-sort";

const minDistance = 1;
const Channel = forwardRef(function Channel(
  props: {
    channel: any;
    channels: any[];
    setChannels: any;
    channelIndex: number;
  },
  ref
) {
  const { channel, ...p } = props;
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const mut = [...p.channels];

    if (activeThumb === 0) {
      mut[p.channelIndex].bottom = newValue[0];
      mut[p.channelIndex].top = Math.max(...newValue);
    } else {
      mut[p.channelIndex].bottom = Math.min(...newValue);
      mut[p.channelIndex].top = newValue[1];
    }
    p.setChannels(mut);
  };
  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mut = [...p.channels];
    mut[p.channelIndex].label = event.target.value;
    p.setChannels(mut);
  };
  return (
    <div className="Channel" ref={ref as React.RefObject<HTMLDivElement>}>
      <SortableKnob>
        <section className="block1">{p.channelIndex}</section>
      </SortableKnob>

      <section className="block4">{channel.label}</section>
      <section className="block6">{channel.label}</section>
      <section className="blockFill">{channel.label}</section>
      <section className="block1">
        <input value={channel.label} onChange={handleLabel} />
      </section>
      <section className="fader">
        <Slider
          orientation="vertical"
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          valueLabelDisplay="on"
          onKeyDown={preventHorizontalKeyboardNavigation}
          onChange={handleChange}
          disableSwap
          value={[channel.bottom, channel.top]}
          step={1}
          min={0}
          max={100}
        />
      </section>
      <SortableKnob>
        <section className="block1">{p.channelIndex}</section>
      </SortableKnob>
    </div>
  );
});

export default Channel;
