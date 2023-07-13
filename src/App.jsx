import { Routers } from '@src/routes/Routers';
import { CustomTheme } from '@src/theme/index';
export const App = () => {
    return (
      <CustomTheme>
        <Routers />
      </CustomTheme>
    );
}