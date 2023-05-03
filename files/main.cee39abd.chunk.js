(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0], {
        22: function(t, e, n) {},
        42: function(t, e, n) {
            "use strict";
            n.r(e);
            var c = n(2),
                a = n.n(c),
                s = n(17),
                r = n.n(s),
                i = (n(22), n(3)),
                j = n(0);
            var l = function(t) {
                    var e, n = Object(c.useState)([]),
                        a = Object(i.a)(n, 2),
                        s = a[0],
                        r = a[1];
                    return Object(c.useEffect)((function() {
                        var e = !0,
                            n = function(t) {
                                for (var e = [], n = 0, c = Object.entries(t); n < c.length; n++)
                                    for (var a = Object(i.a)(c[n], 2), s = (a[0], a[1]), r = 0, j = Object.entries(s); r < j.length; r++) {
                                        var l = Object(i.a)(j[r], 2),
                                            o = l[0],
                                            d = l[1];
                                        "_id" === o && (e.push(Object.values(d)), console.log("".concat(Object.values(d))))
                                    }
                                return e
                            }(t.accounts);
                        return e && r(n),
                            function() {
                                return e = !1
                            }
                    }), [t.accounts]), Object(j.jsxs)("div", {
                        children: [Object(j.jsx)("link", {
                            rel: "stylesheet",
                            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                            integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                            crossOrigin: "anonymous"
                        }), Object(j.jsxs)("nav", {
                            className: "navbar navbar-expand-md navbar-dark bg-dark fixed-top",
                            children: [Object(j.jsx)("a", {
                                className: "navbar-brand mx-2",
                                href: "/",
                                children: "Mongo Idor"
                            }), Object(j.jsx)("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarsExampleDefault",
                                "aria-controls": "navbarsExampleDefault",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: Object(j.jsx)("span", {
                                    className: "navbar-toggler-icon"
                                })
                            })]
                        }), Object(j.jsx)("div", {
                            style: {
                                paddingTop: "5%"
                            },
                            children: Object(j.jsx)("div", {
                                role: "main",
                                className: "container",
                                children: Object(j.jsxs)("div", {
                                    className: "starter-template",
                                    children: [console.log(t.accounts.PTLAB_KEY) ? Object(j.jsx)("h1", {
                                        children: "Admin"
                                    }) : Object(j.jsx)("h1", {
                                        children: "Clients"
                                    }), Object(j.jsx)("br", {}), Object(j.jsxs)("table", {
                                        className: "table",
                                        children: [Object(j.jsx)("thead", {
                                            children: Object(j.jsxs)("tr", {
                                                children: [t.accounts.PTLAB_KEY ? Object(j.jsx)("th", {
                                                    style: {
                                                        display: "none"
                                                    },
                                                    children: "PTLAB_KEY"
                                                }) : Object(j.jsx)("th", {
                                                    style: {
                                                        display: "none"
                                                    },
                                                    children: "ID"
                                                }), Object(j.jsx)("th", {
                                                    children: "First Name"
                                                }), Object(j.jsx)("th", {
                                                    children: "Last Name"
                                                }), Object(j.jsx)("th", {
                                                    children: "Email"
                                                })]
                                            })
                                        }), Object(j.jsx)("tbody", {
                                            children: (e = t.accounts, Array.isArray(e) ? Object(j.jsx)("tr", {
                                                style: {
                                                    display: "contents"
                                                },
                                                children: t.accounts.map((function(e) {
                                                    return Object(j.jsxs)("tr", {
                                                        children: [s.map((function(e) {
                                                            return Object(j.jsx)("td", {
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                children: t.accounts.PTLAB_KEY ? Object(j.jsx)("td", {
                                                                    style: {
                                                                        display: "none"
                                                                    },
                                                                    children: t.accounts.PTLAB_KEY
                                                                }) : Object(j.jsx)("td", {
                                                                    style: {
                                                                        display: "none"
                                                                    },
                                                                    children: e
                                                                })
                                                            })
                                                        })), Object(j.jsx)("td", {
                                                            children: e.first_name
                                                        }), Object(j.jsx)("td", {
                                                            children: e.last_name
                                                        }), Object(j.jsx)("td", {
                                                            children: e.email
                                                        })]
                                                    }, e.firstName)
                                                }))
                                            }) : Object(j.jsxs)("tr", {
                                                children: [t.accounts.PTLAB_KEY && Object(j.jsx)("td", {
                                                    children: t.accounts.PTLAB_KEY
                                                }), Object(j.jsx)("td", {
                                                    children: t.accounts.first_name
                                                }), Object(j.jsx)("td", {
                                                    children: t.accounts.last_name
                                                }), Object(j.jsx)("td", {
                                                    children: t.accounts.email
                                                })]
                                            }, t.accounts.firstName))
                                        })]
                                    }), Object(j.jsx)("br", {}), Object(j.jsx)("br", {})]
                                })
                            })
                        })]
                    })
                },
                o = n(7),
                d = n.n(o),
                b = "".concat("//api-ptl-7227ad1c-8bd30588.libcurl.so/api/v1/accounts");
            var u = function() {
                    var t = Object(c.useState)([]),
                        e = Object(i.a)(t, 2),
                        n = e[0],
                        a = e[1];
                    return Object(c.useEffect)((function() {
                        var t = !0;
                        return function() {
                                var t = window.location.pathname.split("/")[1];
                                return void 0 !== t ? d.a.get(b + "/" + t).then((function(t) {
                                    return t.data
                                })) : d.a.get(b).then((function(t) {
                                    return t.data
                                }))
                            }().then((function(e) {
                                t && a(e)
                            })),
                            function() {
                                return t = !1
                            }
                    }), []), Object(j.jsx)(j.Fragment, {
                        children: Object(j.jsx)(l, {
                            accounts: n
                        })
                    })
                },
                h = function(t) {
                    t && t instanceof Function && n.e(3).then(n.bind(null, 43)).then((function(e) {
                        var n = e.getCLS,
                            c = e.getFID,
                            a = e.getFCP,
                            s = e.getLCP,
                            r = e.getTTFB;
                        n(t), c(t), a(t), s(t), r(t)
                    }))
                };
            r.a.render(Object(j.jsx)(a.a.StrictMode, {
                children: Object(j.jsx)(u, {})
            }), document.getElementById("root")), h()
        }
    },
    [
        [42, 1, 2]
    ]
]);
//# sourceMappingURL=main.cee39abd.chunk.js.map