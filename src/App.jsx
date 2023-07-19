import { Routers } from '@src/routes/Routers';
import { CustomTheme } from '@src/theme/index';
import "./index.css";
export const App = () => {
    return (
      <CustomTheme>
        <Routers />
      </CustomTheme>
    );
}