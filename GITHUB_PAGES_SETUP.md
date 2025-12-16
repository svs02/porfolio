# GitHub Pages 설정 확인 가이드

## 배포가 완료되었습니다! 이제 GitHub에서 설정을 확인하세요.

### 1단계: GitHub 저장소로 이동

https://github.com/lee-taehyeok/my-portfolio

### 2단계: Settings 메뉴 클릭

저장소 상단의 "Settings" 탭 클릭

### 3단계: Pages 메뉴 찾기

왼쪽 사이드바에서 "Pages" 메뉴 클릭

### 4단계: Source 설정 확인

- **Source**: "Deploy from a branch" 선택
- **Branch**:
  - 드롭다운에서 `gh-pages` 선택
  - 폴더는 `/(root)` 선택
- **Save** 버튼 클릭

### 5단계: 배포 확인

- "Your site is live at..." 메시지가 나타나면 성공!
- 사이트 URL: `https://lee-taehyeok.github.io/my-portfolio`
- 배포에 5-10분 정도 소요될 수 있습니다

## 문제 해결

### 사이트가 보이지 않을 때:

1. **빌드가 제대로 되었는지 확인**

   ```bash
   npm run build
   ```

2. **다시 배포**

   ```bash
   npm run deploy
   ```

3. **GitHub Pages 설정 확인**

   - Settings → Pages에서 `gh-pages` 브랜치가 선택되어 있는지 확인
   - 배포 상태가 "Published"로 표시되는지 확인

4. **브라우저 캐시 삭제**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

### 404 오류가 발생할 때:

- `package.json`의 `homepage` 필드가 올바른지 확인
- 현재 설정: `"homepage": "https://lee-taehyeok.github.io/my-portfolio"`

### 빌드 오류가 발생할 때:

```bash
# 빌드만 먼저 테스트
npm run build

# 오류 메시지를 확인하고 수정 후 다시 배포
npm run deploy
```

## 업데이트 배포

코드를 수정한 후:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```
