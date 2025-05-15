import {Link} from "react-router";
import {Route} from "react-router-dom";

function Main() {
    return (

            <main>
                <div className="tips">
                    <h3>Основные принципы кето-диеты:</h3>
                    <ul>
                        <li>70-75% жиров, 20-25% белков, 5-10% углеводов</li>
                        <li>20-50 г углеводов в день</li>
                        <li>Акцент на натуральные жирные продукты</li>
                        <li>Минимум обработанных продуктов</li>
                    </ul>
                </div>
                <div className="food-list">
                    <div className="allowed">
                        <h3><span className="emoji">✅</span> Разрешенные продукты</h3>
                        <ul>
                            <li>Мясо (говядина, свинина, курица)</li>
                            <li>Жирная рыба (лосось, скумбрия)</li>
                            <li>Яйца</li>
                            <li>Натуральные жиры (масло, оливковое масло)</li>
                            <li>Орехи и семена</li>
                            <li>Зеленые овощи</li>
                            <li>Авокадо</li>
                            <li>Сыр и жирные молочные продукты</li>
                        </ul>
                    </div>

                    <div className="forbidden">
                        <h3><span className="emoji">❌</span> Запрещенные продукты</h3>
                        <ul>
                            <li>Сахар и сладости</li>
                            <li>Зерновые (хлеб, макароны, рис)</li>
                            <li>Крахмалистые овощи (картофель, кукуруза)</li>
                            <li>Фрукты (кроме ягод в малых количествах)</li>
                            <li>Бобовые</li>
                            <li>Обезжиренные продукты</li>
                            <li>Алкоголь (кроме сухого вина в умеренных количествах)</li>
                        </ul>
                    </div>
                </div>
                <div className="store-snacks">
                    <h3><span className="emoji">🛒</span> Готовые кето-перекусы из магазина</h3>

                    <div className="snacks-grid">

                        <div className="snack-category">
                            <h4><span className="emoji">🧀</span> Сыры и молочное</h4>
                            <ul>
                                <li>Сырные шарики (Чеддер, Гауда)</li>
                                <li>Сырные палочки в индивидуальной упаковке</li>
                                <li>Сырные чипсы (Parm Crisps, Whisps)</li>
                                <li>Творожные сыры в порционных стаканчиках</li>
                                <li>Готовые сырные тарелки</li>
                            </ul>
                        </div>

                        <div className="snack-category">
                            <h4><span className="emoji">🥜</span> Орехи и семечки</h4>
                            <ul>
                                <li>Миндаль в индивидуальных пачках</li>
                                <li>Ореховые миксы без сахара</li>
                                <li>Солёные фисташки</li>
                                <li>Тыквенные семечки в пакетиках</li>
                                <li>Кокосовые чипсы без сахара</li>
                            </ul>
                        </div>

                        <div className="snack-category">
                            <h4><span className="emoji">🥓</span> Мясные снеки</h4>
                            <ul>
                                <li>Вяленое мясо (бастурма, билтонг)</li>
                                <li>Сушеные колбаски (салями, чоризо)</li>
                                <li>Беконные чипсы</li>
                                <li>Готовые куриные крылышки</li>
                                <li>Мясные батончики без сахара</li>
                            </ul>
                        </div>

                        <div className="snack-category">
                            <h4><span className="emoji">🥑</span> Овощи и другое</h4>
                            <ul>
                                <li>Готовые гуакамоле в порционных упаковках</li>
                                <li>Оливки и маслины в индивидуальных пачках</li>
                                <li>Солёные огурчики мини</li>
                                <li>Морские водоросли нори</li>
                                <li>Авокадо в индивидуальной упаковке</li>
                            </ul>
                        </div>

                        <div className="snack-category">
                            <h4><span className="emoji">🍫</span> Сладкие альтернативы</h4>
                            <ul>
                                <li>Тёмный шоколад 85%+</li>
                                <li>Кето-батончики (без сахара)</li>
                                <li>Ореховые пасты в порционных пакетиках</li>
                                <li>Кокосовые батончики</li>
                                <li>Жирные бомбы в упаковке</li>
                            </ul>
                        </div>

                        <div className="snack-category">
                            <h4><span className="emoji">🥤</span> Напитки</h4>
                            <ul>
                                <li>Костный бульон в пакетиках</li>
                                <li>Кокосовая вода (несладкая)</li>
                                <li>Готовые кето-кофе (Bulletproof)</li>
                                <li>Миндальное молоко без сахара</li>
                                <li>Газированная вода с натуральными ароматами</li>
                            </ul>
                        </div>

                    </div>

                    <div className="snack-tips">
                        <p><strong>Совет:</strong> Всегда проверяйте состав на упаковке — избегайте сахара, мальтодекстрина и других скрытых углеводов.</p>
                    </div>
                </div>
                <div className="keto-plan">
                    {/* Неделя 1 */}
                    <div className="week">
                        <h2><span className="emoji">🌟</span> Неделя 1</h2>

                        <div className="day">
                            <h3>День 1</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яичница с беконом + авокадо</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Куриные бедра с запечённой брокколи под сыром</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Стейк из говядины с грибами в сливочном соусе</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Горсть орехов макадамия</div>
                        </div>

                        <div className="day">
                            <h3>День 2</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Омлет с козьим сыром и шпинатом</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Лосось на гриле с салатом из рукколы и пармезана</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Телячьи отбивные с тушёной капустой</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Сырные кубики</div>
                        </div>

                        <div className="day">
                            <h3>День 3</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Смузи из кокосового молока с миндальным маслом и какао</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Салат "Цезарь" с курицей (без сухариков)</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Утиная грудка с брюссельской капустой</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Оливки с голубым сыром</div>
                        </div>

                        <div className="day">
                            <h3>День 4</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Чиа-пудинг с кокосовыми сливками</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Говяжий гуляш с цветной капустой</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Креветки в чесночном масле с цукини</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Вяленая говядина</div>
                        </div>

                        <div className="day">
                            <h3>День 5</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яйца Бенедикт (без булочки)</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Фаршированные перцы с мясом и сыром</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Скумбрия запечённая с лимоном</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Тыквенные семечки</div>
                        </div>

                        <div className="day">
                            <h3>День 6</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Авокадо с яйцом-пашот и лососем</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Свиные рёбрышки на гриле</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Куриная печень с луком и сливками</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Кокосовые чипсы</div>
                        </div>

                        <div className="day">
                            <h3>День 7</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Сырники из миндальной муки</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Баранина с баклажанами</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Форель в миндальной корочке</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Орехи пекан</div>
                        </div>
                    </div>

                    {/* Неделя 2 */}
                    <div className="week">
                        <h2><span className="emoji">✨</span> Неделя 2</h2>

                        <div className="day">
                            <h3>День 8</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яичные маффины с беконом</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Говяжий язык с хреном</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Кальмары фаршированные</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Сельдерей с миндальной пастой</div>
                        </div>

                        <div className="day">
                            <h3>День 9</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Омлет с грибами и трюфельным маслом</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Утка с кислой капустой</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Стейк из тунца с авокадо</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Сырные палочки</div>
                        </div>

                        <div className="day">
                            <h3>День 10</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Гренки из кето-хлеба с сыром</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Тефтели в сливочном соусе</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Кролик тушёный в сметане</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Ореховый микс</div>
                        </div>

                        <div className="day">
                            <h3>День 11</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яйца скрэмбл с трюфелями</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Куриные крылышки Buffalo</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Сардины с лимоном и розмарином</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Солёные огурцы</div>
                        </div>

                        <div className="day">
                            <h3>День 12</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Авокадо, фаршированное крабовым мясом</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Говяжьи щёчки томлёные</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Мидии в чесночно-сливочном соусе</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Тёмный шоколад (85%)</div>
                        </div>

                        <div className="day">
                            <h3>День 13</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Фриттата с овощами</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Свиная вырезка с брокколи</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Сёмга с спаржей на гриле</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Оливки с анчоусами</div>
                        </div>

                        <div className="day">
                            <h3>День 14</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Кето-блины с ягодами</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Бараньи котлеты с баклажанами</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Форель "ухо-маки" (без риса)</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Жареные сырные шарики</div>
                        </div>
                    </div>

                    {/* Неделя 3 */}
                    <div className="week">
                        <h2><span className="emoji">🔥</span> Неделя 3</h2>

                        <div className="day">
                            <h3>День 15</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яйца с трюфельным маслом и пармезаном</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Куриная грудка с песто</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Говядина Веллингтон (без теста)</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Орехи кешью</div>
                        </div>

                        <div className="day">
                            <h3>День 16</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Омлет с авокадо и креветками</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Утиная грудка с гранатовым соусом</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Морской окунь с цукини</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Сыр Камамбер</div>
                        </div>

                        <div className="day">
                            <h3>День 17</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яичный рулет с сыром и ветчиной</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Телячьи медальоны с трюфельным соусом</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Креветки "А-ля скампи"</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Кокосовые маффины</div>
                        </div>

                        <div className="day">
                            <h3>День 18</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Сырный суфле</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Куриные сердечки в сливочном соусе</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Тунец с авокадо и кунжутом</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Орехи макадамия</div>
                        </div>

                        <div className="day">
                            <h3>День 19</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Яйца с трюфельной солью</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Говяжьи рёбрышки BBQ</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Лобстер с лимонным маслом</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Сырные чипсы</div>
                        </div>

                        <div className="day">
                            <h3>День 20</h3>
                            <div className="meal"><span className="meal-title">Завтрак:</span> Кето-вафли с ягодами</div>
                            <div className="meal"><span className="meal-title">Обед:</span> Утиная ножка конфи</div>
                            <div className="meal"><span className="meal-title">Ужин:</span> Стейк из мраморной говядины</div>
                            <div className="meal"><span className="meal-title">Перекус:</span> Шоколадные жирные бомбы</div>
                        </div>
                    </div>
                </div>


                <div className="tips">
                    <h3><span className="emoji">💡</span> Советы:</h3>
                    <ul>
                        <li>Следите за водным балансом (2–3 л в день)</li>
                        <li>Добавляйте электролиты (магний, калий, натрий)</li>
                        <li>Если нужно сладкое — <strong>кето-десерты</strong> (чиа-пудинг, жирные бомбы)</li>
                    </ul>
                </div>
            </main>

    );
}


export default Main;