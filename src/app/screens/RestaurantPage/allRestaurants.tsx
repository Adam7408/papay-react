import React, { useEffect, useRef } from "react";
import { Container, Stack, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AspectRatio from "@mui/joy/AspectRatio";
import { Link } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Favorite, Search } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

const order_list = Array.from(Array(8).keys());
console.log(order_list);

export function AllRestaurants() {
    return (
        <div className="all_restaurant">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Box className="fil_search_box">
                        <Box className="fil_box" style={{ cursor: "pointer" }}>
                            <a>Best</a>
                            <a>popular</a>
                            <a>Trend</a>
                            <a>New</a>
                        </Box>
                        <Box className="search_big_box">
                            <form className="search_form" action="" method="">
                                <input
                                    type="search"
                                    className="searchInput"
                                    name="resSearch"
                                    placeholder="Qidiriuv"
                                />
                                <Button
                                    className="button_search"
                                    variant="contained"
                                    endIcon={<SearchIcon />}
                                >
                                    Search
                                </Button>
                            </form>
                        </Box>
                    </Box>
                    <Stack className="all_res_box">
                        <CssVarsProvider>
                            {order_list.map(ele => {
                                return (
                                    <Card
                                        variant="outlined"
                                        sx={{
                                            minHeight: 410,
                                            minWidth: 290,
                                            mx: "17px",
                                            my: "20px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <CardOverflow>
                                            <AspectRatio ratio="1">
                                                <img src={"/restaurant/burak.jpeg"} alt="" />
                                            </AspectRatio>
                                            <IconButton
                                                aria-label="Like minimal photograpy"
                                                size="md"
                                                variant="solid"
                                                color="neutral"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                                sx={{
                                                    position: "absolute",
                                                    zIndex: 2,
                                                    borderRadius: "50%",
                                                    right: "1rem",
                                                    bottom: 0,
                                                    transform: "translateY(50%)",
                                                    color: "rgba(0, 0, 0,.4)",
                                                }}
                                            >
                                                <Favorite style={{ color: "white" }}  />
                                            </IconButton>
                                        </CardOverflow>

                                        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                                            Texas De Brazil Restaurant
                                        </Typography>

                                        <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                                            <Link href="" startDecorator={<LocationOnRoundedIcon />} textColor={"neutral.700"}>
                                                Tashkent, Yunus-Abad 10-20
                                            </Link>
                                        </Typography>

                                        <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                                            <Link
                                                href=""
                                                startDecorator={<CallIcon />}
                                                textColor="neutral.700"
                                            >
                                                010-1234-5678
                                            </Link>
                                        </Typography>

                                        <CardOverflow
                                        variant="soft"
                                        sx={{
                                            display: "flex",
                                            gap: 1.5,
                                            py: 1.5,
                                            px: "var(--Card-padding",
                                            borderTop: "1px solid",
                                            borderColor: "neutral.outlinedBorder",
                                            bgcolor: "background.level1",
                                        }}>
                                            <Stack style={{ flexDirection: "row", gap: "12px" }}>
                                                <Typography
                                                    level="body-md"
                                                    sx={{
                                                        fontWeight: "md",
                                                        color: "text.secondary",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    100{" "}
                                                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                                                </Typography>

                                                <Box sx={{ width: 2, bgcolor: "divider" }} />

                                                <Typography
                                                    level="body-md"
                                                    sx={{
                                                        fontWeight: "md",
                                                        color: "text.secondary",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    <div> 500 </div>
                                                    <FavoriteIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                                                </Typography>
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                                )
                            })}
                            
                        </CssVarsProvider>
                    </Stack>

                    <Stack className="bottom_box">
                        <img className="line_img" src="/restaurant/line.svg" />
                        <Pagination
                            count={3}
                            page={1}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: ArrowBackRoundedIcon,
                                        next: ArrowForwardRoundedIcon,
                                    }}
                                    {...item}
                                    color={"secondary"}
                                />
                            )}
                        />
                            <img className="line_img_two" src="/restaurant/line_two.svg" />
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}