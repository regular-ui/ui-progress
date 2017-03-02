## 示例
### 基本形式

<div class="m-example"></div>

```xml
<linearProgress percent="36" />
```

### 颜色扩展

<div class="m-example"></div>

```xml
<linearProgress percent="25" state="info" />
<linearProgress percent="50" state="success" />
<linearProgress percent="75" state="warning" />
<linearProgress percent="100" state="error" />
```

### 尺寸扩展

<div class="m-example"></div>

```xml
<linearProgress percent="20" size="xs" />
<linearProgress percent="40" size="sm" />
<linearProgress percent="60" />
<linearProgress percent="80" size="lg" />
<linearProgress percent="100" size="xl" />
```

### 条纹

<div class="m-example"></div>

```xml
<linearProgress percent="36" striped />
```

### 条纹动画

<div class="m-example"></div>

```xml
<linearProgress percent="72" state="error" striped active />
```

```css
.u-linearProgress + .u-linearProgress { margin-top: 20px; }
```
