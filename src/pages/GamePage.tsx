import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const games = [
  {
    url: "game1",
    title: "Game1",
    content: "Game to play and catch gift",
  },
  {
    url: "game2",
    title: "Game2",
    content: "Select 2 image same as to unlock",
  },
  {
    url: "Game3",
    title: "Game3",
    content: "Game3",
  },
  {
    url: "Game4",
    title: "Game4",
    content: "Game4",
  },
  {
    url: "Game5",
    title: "Game5",
    content: "Game5",
  },
  {
    url: "Game6",
    title: "Game6",
    content: "Game6",
  },
];
export default function GamePage() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="mailbox folders">
        <List>
          {games.map((game, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <Link to={game.url} style={{ width: "100%" }}>
                  <ListItemText
                    children={
                      <>
                        <div>{game.title}</div>
                        <div>
                          <small>{game.content}</small>
                        </div>
                      </>
                    }
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
