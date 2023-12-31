import React from "react";
import {
    Box,
    Container,
    Stack,
    Button,
    IconButton,
    Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
    return (
        <div className="format home_navbar">
            <Container>
                <Stack
                    flexDirection={"row"}
                    className="navbar_config"
                    justifyContent={"space-between"}
                >
                    <Box>
                        <img src="/icons/papay.svg" alt="" />
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        alignItems={"center"}
                        className="navbar_links"
                    >
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/" activeClassName="underline">
                                Bosh Sahifa
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink
                                to="/restaurant"
                                activeClassName="underline"
                            >
                                Oshxona
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/orders" activeClassName="underline">
                                Buyurtma
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink
                                to="/community"
                                activeClassName="underline"
                            >
                                Jamiyat
                            </NavLink>
                        </Box>

                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/help" activeClassName="underline">
                                Yordam
                            </NavLink>
                        </Box>

                        <Box className="hover-line">
                            <IconButton
                                aria-label="cart"
                                id="basic-button"
                                aria-controls={undefined}
                                aria-haspopup="true"
                                aria-expanded={undefined}
                            >
                                <Badge badgeContent={3} color="secondary">
                                    <img src={"/icons/shopping_cart.svg"} />
                                </Badge>
                            </IconButton>
                        </Box>

                        <Box>
                            <Button
                                variant="contained"
                                style={{
                                    color: "#FFFFFF",
                                    background: "#1976d2",
                                }}
                            >
                                KIRISH
                            </Button>
                        </Box>
                    </Stack>
                </Stack>

                <Stack className="head_information" flexDirection={"row"}>
                    <Stack
                        flexDirection={"column"}
                        style={{ marginTop: "86px", marginLeft: "24px" }}
                    >
                        <Box>
                            <img src="/icons/wellcome.svg" alt="" />
                        </Box>
                        <Box className="define_restaurant">
                            The Authentic Restaurant & Cafe
                        </Box>
                        <Box className="timeline_service">
                            24 soat xizmatingizdamiz!
                        </Box>
                        <Box sx={{ mt: "90px" }}>
                            <Button
                                variant="contained"
                                style={{
                                    width: "210px",
                                    height: "60px",
                                    background: "#1976d2",
                                    color: "#ffffff",
                                }}
                            >
                                RO'YHATDAN O'TISH
                            </Button>
                        </Box>
                    </Stack>
                    <Box className="big_img"></Box>
                </Stack>
            </Container>
        </div>
    );
}
