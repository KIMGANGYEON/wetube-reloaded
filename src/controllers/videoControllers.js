export const trending = (req, res) => res.send("<h1>Home Page Videos</h1>");
export const see = (req, res) => {
  console.log(req.params);
  res.send("See Page Videos");
};
export const edit = (req, res) => res.send("Edit Page Videos");
export const search = (req, res) => res.send("Search Page Videos");
export const upload = (req, res) => res.send("Upload Page Videos");
export const deleteVideo = (req, res) => res.send("Delete Page Videos");
