### Hi there 👋

#### 👷 Check out what I'm currently working on
{{range recentContributions 10}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .OccurredAt}})
{{- end}}

#### 🌱 My latest projects
{{range recentRepos 10}}
- [{{.Name}}]({{.URL}}) - {{.Description}}
{{- end}}

#### 🔭 Latest releases I've contributed to
{{range recentReleases 10}}
- [{{.Name}}]({{.URL}}) ([{{.LastRelease.TagName}}]({{.LastRelease.URL}}), {{humanize .LastRelease.PublishedAt}}) - {{.Description}}
{{- end}}

#### 💬 Feedback

Say Hello, I don't bite!

#### 📫 How to reach me

- Facebook: https://www.facebook.com/J2m22
- Instagram: https://www.instagram.com/jeandedieu.mbumba/

Want your own self-generating profile page? Check out [readme-scribe](https://github.com/J2mCoder)!

<!-- comments will be preserved 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 -->