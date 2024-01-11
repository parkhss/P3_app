exports.userinfo = (req, res) => {
    const id = ctx.params.id;
    res.send(`${id} 님의 회원정보`);
}