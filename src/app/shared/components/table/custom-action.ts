export class CustomAction {
  title: string;
  icon: string;
  color: string;

  constructor(title: string, icon = null, color = null) {
    this.title = title;
    this.color = color ?? 'primary';
    this.icon = icon ?? 'build';
  }
}
