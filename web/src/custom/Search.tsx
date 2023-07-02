import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search: React.FC = () => {
  return (
    <Input.Search
      placeholder="Describe your look"
      prefix={<SearchOutlined />}
      size="large"
      enterButton="Generate"
      // loading
      className="pr-2"
      style={{ width: 600 }}
    />
  );
};

export default Search;
