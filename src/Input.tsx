import React from "react";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};
const suggestions = [
  { id: "Thailand", text: "Thailand", className: "" },
  { id: "India", text: "India", className: "" },
  { id: "Vietnam", text: "Vietnam", className: "" },
  { id: "Turkey", text: "Turkey", className: "" },
];
const Input = () => {
  const [tags, setTags] = React.useState([]);

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index: number, newTag: any) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag: any) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  const handleDrag = (tag: any, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index: number) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <ReactTags
      tags={tags}
      suggestions={suggestions}
      separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      handleTagClick={handleTagClick}
      onTagUpdate={onTagUpdate}
      inputFieldPosition="top"
      //   editable
      //   clearAll
      onClearAll={onClearAll}
      maxTags={100}
      placeholder="Нажмите 'space' что бы добавить"
    />
  );
};

export default Input;
