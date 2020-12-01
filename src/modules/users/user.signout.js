export async function singout(req, res) {
  req.logout();
  if (!req.session) {
    req.session.destroy(function(err) {
      res.redirect("/login");
    });
  } else {
    res.redirect("/login");
  }
}
