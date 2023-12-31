import { Box, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function MemberPosts(props: any) {
    return (
        <Box className={"post_content"}>
            {["1", "2", "3"].map((article) => {
                return (
                    <Stack className="all_article_box" sx={{ cursor: "pointer" }} >
                        <Box
                            className="all_article_img"
                            sx={{ backgroundImage: `url(/community/default_article.svg)` }}
                            ></Box>
                        <Box className={"all_article_container"}>
                            <Box alignItems={"center"} display={"flex"} sx={{ mt: "5px" }}>
                                <img 
                                    src={"/auth/default_user.svg"}
                                    alt=""
                                    width={"35px"}
                                    height={"35px"}
                                    style={{ borderRadius: "50%", backgroundSize: "cover" }}
                                />
                                <span className="all_article_author_user">
                                    Ismailov Akmal
                                </span>
                            </Box>

                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                sx={{ mt: "15px" }}
                            >
                            <span className="all_article_title">Restaurantlarga baho</span>
                            <p className="all_article_desc">Burak ajoyib restaurant</p>
                            </Box>

                            <Box>
                                <Box
                                className={"article_share"}
                                style={{ width: "100%", height: "auto" }}
                                sx={{ mb: "10px" }}
                                >
                                    <Box
                                        className={"article_share_main"}
                                        style={{
                                        color: "#fff",
                                        marginLeft: "150px",
                                        display: "flex",
                                        alignItems: "center",
                                        }}
                                    >
                                        {moment().format("YY-MM-DD HH:mm")}
                                        <Checkbox
                                            sx={{ ml: "40px" }}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite style={{ color: "red" }} />}
                                            checked={true}
                                        />

                                        <span style={{ marginRight: "18px" }}> 100 </span>
                                        <RemoveRedEyeIcon />
                                        <span style={{ marginRight: "18px", marginLeft: "12px" }}> 1000 </span>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                );
            })}
        </Box>
    );
}
